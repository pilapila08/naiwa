import http.server
import socket
import socketserver
import threading
import time
import tkinter as tk
import traceback
import webbrowser
from pathlib import Path
from tkinter import messagebox


ROOT = Path(__file__).resolve().parent
DIST_DIR = ROOT / "dist"
HOST = "127.0.0.1"
PORT = 4173
URL = f"http://{HOST}:{PORT}/#produce"
ERROR_LOG = ROOT / "naiwa-launcher-error.log"


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        return


class ReusableTcpServer(socketserver.ThreadingTCPServer):
    allow_reuse_address = True


class NaiwaLauncher(tk.Tk):
    def __init__(self):
        super().__init__()
        self.server = None
        self.server_thread = None
        self.title("奶蛙量产工厂")
        self.geometry("420x286")
        self.resizable(False, False)
        self.configure(bg="#fff8dc")
        self.protocol("WM_DELETE_WINDOW", self.close_app)

        self.status = tk.StringVar(value="本地客户端未启动")
        self.build_ui()
        self.center_window()
        self.refresh_status()

    def build_ui(self):
        wrap = tk.Frame(self, bg="#fff8dc", padx=24, pady=22)
        wrap.pack(fill="both", expand=True)

        icon = tk.Label(
            wrap,
            text="奶",
            width=4,
            height=2,
            bg="#ffe78a",
            fg="#4f3b12",
            font=("Microsoft YaHei UI", 18, "bold"),
        )
        icon.pack(anchor="w")

        tk.Label(
            wrap,
            text="奶蛙量产工厂",
            bg="#fff8dc",
            fg="#2b2412",
            font=("Microsoft YaHei UI", 18, "bold"),
        ).pack(anchor="w", pady=(14, 2))

        tk.Label(
            wrap,
            text="启动后会打开本地页面。API Key 仍只保存在你的浏览器会话里。",
            bg="#fff8dc",
            fg="#8a7741",
            font=("Microsoft YaHei UI", 9),
            wraplength=360,
            justify="left",
        ).pack(anchor="w", pady=(0, 15))

        status_label = tk.Label(
            wrap,
            textvariable=self.status,
            bg="#fff1b8",
            fg="#6d5414",
            font=("Microsoft YaHei UI", 10, "bold"),
            padx=12,
            pady=8,
        )
        status_label.pack(fill="x", pady=(0, 14))

        buttons = tk.Frame(wrap, bg="#fff8dc")
        buttons.pack(fill="x")

        self.start_button = tk.Button(
            buttons,
            text="启动本地客户端",
            command=self.start_client,
            bg="#f4c542",
            fg="#2b2412",
            activebackground="#ffd95a",
            activeforeground="#2b2412",
            relief="flat",
            font=("Microsoft YaHei UI", 10, "bold"),
            padx=14,
            pady=8,
        )
        self.start_button.pack(side="left")

        tk.Button(
            buttons,
            text="打开页面",
            command=lambda: webbrowser.open(URL),
            bg="#fff4c7",
            fg="#6d5414",
            activebackground="#ffe78a",
            activeforeground="#2b2412",
            relief="flat",
            font=("Microsoft YaHei UI", 10, "bold"),
            padx=14,
            pady=8,
        ).pack(side="left", padx=10)

        tk.Button(
            buttons,
            text="退出",
            command=self.close_app,
            bg="#ffffff",
            fg="#8a7741",
            activebackground="#fff4c7",
            relief="flat",
            font=("Microsoft YaHei UI", 10, "bold"),
            padx=14,
            pady=8,
        ).pack(side="right")

    def center_window(self):
        self.update_idletasks()
        width = self.winfo_width()
        height = self.winfo_height()
        x = (self.winfo_screenwidth() - width) // 2
        y = (self.winfo_screenheight() - height) // 2
        self.geometry(f"{width}x{height}+{x}+{y}")

    def is_port_open(self):
        with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
            sock.settimeout(0.2)
            return sock.connect_ex((HOST, PORT)) == 0

    def start_client(self):
        if not DIST_DIR.exists():
            messagebox.showerror("无法启动", "没有找到 dist 目录。")
            return

        if self.is_port_open():
            self.status.set("本地客户端已运行")
            webbrowser.open(URL)
            return

        try:
            handler = lambda *args, **kwargs: QuietHandler(*args, directory=str(DIST_DIR), **kwargs)
            self.server = ReusableTcpServer((HOST, PORT), handler)
            self.server_thread = threading.Thread(target=self.server.serve_forever, daemon=True)
            self.server_thread.start()
        except OSError:
            self.status.set("端口已被占用，正在尝试直接打开页面")
        except Exception as exc:
            messagebox.showerror("启动失败", str(exc))
            return

        self.status.set("本地客户端已启动")
        time.sleep(0.2)
        webbrowser.open(URL)
        self.refresh_status()

    def refresh_status(self):
        if self.is_port_open():
            self.status.set(f"本地客户端运行中：{URL}")
            self.start_button.configure(text="重新打开页面")
        else:
            self.status.set("本地客户端未启动")
            self.start_button.configure(text="启动本地客户端")
        self.after(1800, self.refresh_status)

    def close_app(self):
        if self.server:
            self.server.shutdown()
            self.server.server_close()
        self.destroy()


def main():
    app = NaiwaLauncher()
    app.mainloop()


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        ERROR_LOG.write_text(traceback.format_exc(), encoding="utf-8")
        messagebox.showerror("奶蛙工厂启动失败", f"{exc}\n\n错误详情已写入：\n{ERROR_LOG}")
