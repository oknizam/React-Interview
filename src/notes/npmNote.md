
# 1. package.json 
  
  -> Details of project configuration
    1. project name
    2. version
    3. dependencies
    4. dev-dependencies
    5. Commands to run project

  when we do npm i dependecies get read from here and installed for developement
  npm i runs delete package-lock.json

# 2. package-lock.json

  1. It has exact version of package
  Ex: "react":"^18.0.0" -> written in package json (this is semantic versioning)

    package-lock has sanpshot of exact latest version  18.2.5 -> minor and patch
  2. This solves project is working in my machine

  3. When we do npm ci -> used ci/cd pipelines
    1. It reads dependencies from package-lock.json not from package.json
    2. when npm ci runs it deletes only node_modules not lock file

  4. if u delete manually package-lock may cause unexpected dependecy issues


# 3. Monorepo will handle dependecy in workspace file shared across all its projects

# 4. devdependencies 

    this will not installed during npm ci build , because these are development packges
    like jest, es-lint, prettier

# 5. peer-dependencies

  1. This will also not required when we are creating a project
  2. This is required only when we are creating project as package

  Ex: lets take react-dom -> which is required to render react code on web page 
  this is package if we install this we need react also in this so if check react-dom github we can see in packge.json of react-dom has react as peer-dependency

# 6. Semantic versioning (^ and ~)

  Example: "react":"18.2.3"

  1. Major -> (18) -> major change comes breaking change
  2. Minor -> (2) -> feature which will not affect existing features
  3. Patch -> (3) -> minor patch fixes ui fixes

  "react":"^18.0.1" -> when we do npm i , it will install latest minor and patch => "18.2.3"
  "react":"~18.0.1" -> when we do npm i , it will install latest patch => "18.0.3"




  