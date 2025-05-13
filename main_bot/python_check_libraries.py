required_libraries = [
    "assemblyai",
    "gtts",
    "pyaudio",
    "wave",        # built-in; always available
    "numpy",
    "pydub",
    "pygame",
    "PyPDF2",
    "google.generativeai",
    "google.oauth2",
    "googleapiclient",
    "os",          # built-in; always available
    "dotenv",
    "threading",   # built-in; always available
    "time",        # built-in; always available
    "datetime"     # built-in; always available
]

for lib in required_libraries:
    try:
        __import__(lib.split('.')[0])  # import the base module
        print(f"{lib}: ✅ Installed")
    except ImportError:
        print(f"{lib}: ❌ NOT Installed")
