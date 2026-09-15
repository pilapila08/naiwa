Set shell = CreateObject("WScript.Shell")
Set fso = CreateObject("Scripting.FileSystemObject")
appDir = fso.GetParentFolderName(WScript.ScriptFullName)
launcher = fso.BuildPath(appDir, "naiwa-launcher.pyw")

If Not fso.FileExists(launcher) Then
  MsgBox "naiwa-launcher.pyw was not found.", vbExclamation, "Naiwa Factory"
  WScript.Quit 1
End If

On Error Resume Next
args = Chr(34) & launcher & Chr(34)

If RunApp("d:\anaconda3\pythonw.exe", args) Then WScript.Quit 0
If RunApp("D:\all app here\msys2\ucrt64\bin\pythonw.exe", args) Then WScript.Quit 0
If RunApp("pythonw.exe", args) Then WScript.Quit 0
If RunApp("pyw.exe", args) Then WScript.Quit 0
If RunApp("py.exe", "-3 " & args) Then WScript.Quit 0

MsgBox "Python was not found. Please install Python or add it to PATH.", vbExclamation, "Naiwa Factory"

Function RunApp(exePath, appArgs)
  Err.Clear
  If InStr(exePath, "\") > 0 Then
    If Not fso.FileExists(exePath) Then
      RunApp = False
      Exit Function
    End If
    commandLine = Chr(34) & exePath & Chr(34) & " " & appArgs
  Else
    commandLine = exePath & " " & appArgs
  End If
  shell.Run commandLine, 0, False
  RunApp = (Err.Number = 0)
End Function
