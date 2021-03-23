@ECHO OFF
SETLOCAL


:BEGIN
CLS
COLOR 3F >nul 2>&1
SET MC_SYS32=%SYSTEMROOT%\SYSTEM32
REM Make batch directory the same as the directory it's being called from
REM For example, if "run as admin" the batch starting dir could be system32
CD "%~dp0" >nul 2>&1


:CHECKJAVA
ECHO INFO: Checking java installation...
ECHO.
GOTO CHECK


:MAIN
java -d64 -jar serverstarter-1.2.7.jar
GOTO EOF

:CHECK
REM Check if serverstarter JAR is already downloaded
IF NOT EXIST "%cd%\serverstarter-1.2.7.jar" (
	ECHO serverstarter binary not found, downloading serverstarter...
	%SYSTEMROOT%\SYSTEM32\bitsadmin.exe /rawreturn /nowrap /transfer starter /dynamic /download /priority foreground https://github.com/BloodyMods/ServerStarter/releases/download/v1.2.7/serverstarter-1.2.7.jar "%cd%\serverstarter-1.2.7.jar"
   GOTO MAIN
) ELSE (
   GOTO MAIN
)


:JAVAERROR
COLOR CF
ECHO ERROR: Could not find 64-bit Java 1.8 installed or in PATH
PAUSE


:EOF
pause