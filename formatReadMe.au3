#include <File.au3>

FileRecycle(@ScriptDir & "\ReadMe.md")
$folderList = _FileListToArray(@ScriptDir, "*", 2)
$str = "# User files of the games that I played!" & @CRLF & @CRLF & "```" & @CRLF
For $i = 2 To $folderList[0]
	$str = $str & $folderList[$i] & @CRLF
Next
$str = $str & "```"
FileWrite(@ScriptDir & "\ReadMe.md", $str)
