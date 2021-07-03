<link rel="stylesheet" href="style.css">
<link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500&display=swap" rel="stylesheet">



**Folder Structure**

<br>my-app/
- README.md
- node_modules/
- package.json
- public/
  - index.html (**Must exist**, only file in public/ can be used by this file)
  - favicon.ico //title icon 
  - manifest.json //mobile platform setting 
- src/
  - App.css
  - App.js
  - App.test.js
  - index.css
  - index.js (**Must exist**)
  - logo.svg


## props
- props are read-only, function cannot modify its props attribute
- Props type setting  [link](https://reactjs.org/docs/typechecking-with-proptypes.html)
   
  ```
  import PropTypes from 'prop-types'

  // outside the component 
  component.propTypes={
      attribute1: PropTypes.string,
      attributes2: PropTypes.func.isRequired //this attr is compulsory
  }
  ```
- setting the defaultProps. similar with setting props
  ```
  component.defaultProps = {
      attribute1:"...."
  }
  ```


# npm install 
npm install saves any specified packages into dependencies by default. Additionally, you can control where and how they get saved with some additional flags:

* -P, --save-prod: Package will appear in your dependencies. This is the default unless -D or -O are present.

* -D, --save-dev: Package will appear in your devDependencies
* -O, --save-optional: Package will appear in your optionalDependencies.
* --no-save: Prevents saving to dependencies.
* When using any of the above options to save dependencies to your package.json, there are two additional, optional flags:
* -E, --save-exact: Saved dependencies will be configured with an exact version rather than using npm's default semver range operator.
* -B, --save-bundle: Saved dependencies will also be added to your bundleDependencies list.


# component 
- componentWillMount() 
- componentDidMount() 
- shouldComponentUpdate() 
- componentDidUpdate() 
- componentWillUnmount()