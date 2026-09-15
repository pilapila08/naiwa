@echo off
set "APP_DIR=%~dp0"
if exist "%APP_DIR%start-naiwa.vbs" (
  start "" wscript.exe "%APP_DIR%start-naiwa.vbs"
  exit /b
)

if not exist "%APP_DIR%naiwa-launcher.pyw" (
  echo naiwa-launcher.pyw was not found.
  pause
  exit /b 1
)

if exist "d:\anaconda3\pythonw.exe" (
  start "" "d:\anaconda3\pythonw.exe" "%APP_DIR%naiwa-launcher.pyw"
  exit /b
)

if exist "D:\all app here\msys2\ucrt64\bin\pythonw.exe" (
  start "" "D:\all app here\msys2\ucrt64\bin\pythonw.exe" "%APP_DIR%naiwa-launcher.pyw"
  exit /b
)

where pythonw.exe >nul 2>nul
if %errorlevel%==0 (
  start "" pythonw.exe "%APP_DIR%naiwa-launcher.pyw"
  exit /b
)

where pyw.exe >nul 2>nul
if %errorlevel%==0 (
  start "" pyw.exe "%APP_DIR%naiwa-launcher.pyw"
  exit /b
)

where py.exe >nul 2>nul
if %errorlevel%==0 (
  start "" py.exe -3 "%APP_DIR%naiwa-launcher.pyw"
  exit /b
)

echo Python was not found. Please install Python or add it to PATH.
pause
