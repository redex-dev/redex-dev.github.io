webpackJsonp([0xeec0bac98087],{1116:function(e,n){e.exports={data:{package:{id:"unpublished/Astrocoders/reform",score:0,name:"Astrocoders/reform",version:"2.0.6",description:"Reasonably making forms sound good again",keywords:["form","react","bucklescript"],license:"MIT",updated:"2018-01-16T07:17:12.520Z",stars:25,type:"unpublished",quality:0,popularity:0,maintenance:0,readme:'<h1>ReForm.re</h1>\n<p><a href="https://greenkeeper.io/"><img src="https://badges.greenkeeper.io/Astrocoders/reform.svg" alt="Greenkeeper badge"></a>\n<a href="https://travis-ci.org/Astrocoders/reform"><img src="https://travis-ci.org/Astrocoders/reform.svg?branch=master" alt="Build Status"></a></p>\n<p>Reasonably making forms sound good again</p>\n<h2>Usage</h2>\n<pre><code class="language-reason">module SignInFormParams = {\n  type state = {\n    password: string,\n    email: string\n  };\n  type fields = [ | `password | `email ];\n  let handleChange = (action, state) =>\n    switch action {\n    | (`password, value) => {...state, password: value}\n    | (`email, value) => {...state, email: value}\n    };\n};\n\nmodule SignInForm = ReForm.Create(SignInFormParams);\n\nlet component = ReasonReact.statelessComponent("SignIn");\n\nlet make = (~signInMutation, _children) => {\n  ...component,\n  render: (_) => {\n    let validate: SignInFormParams.state => option(string) = (values) => switch values {\n      | { password: "12345" } => Some("Sorry, can\'t do")\n      | _ => None\n    };\n\n    &#x3C;SignInForm\n      initialState={password: "", email: ""}\n      onSubmit=((values, ~setError, ~setSubmitting) => whatever(values, ~setError, ~setSubmitting))\n      validate\n    >\n      ...(\n        (~form, ~handleChange, ~handleSubmit) =>\n          &#x3C;FormWrapper>\n            &#x3C;ErrorWarn error=form.error/>\n            &#x3C;FieldsWrapper>\n              &#x3C;FormField\n                fieldType=FormField.TextField\n                value=form.values.email\n                placeholder="Email"\n                style=fieldsStyle\n                placeholderTextColor=AppTheme.Colors.blackLight\n                /* handleChange signature is (fields, string) => unit, so you can use right away with RN and React Web.\n                ** Just make an abstraction above to not give it an event and just the value\n                */\n                onChangeText=handleChange(`email)\n              />\n              &#x3C;FormField\n                fieldType=FormField.TextField\n                placeholder="Password"\n                onChangeText=handleChange(`password)\n                value=form.values.password\n                style=fieldsStyle\n                placeholderTextColor=AppTheme.Colors.blackLight\n              />\n            &#x3C;/FieldsWrapper>\n            &#x3C;RaisedButton text="Sign in" onPress=handleSubmit/>\n            &#x3C;/FormWrapper>\n      )\n    &#x3C;/SignInForm>\n  }\n}\n</code></pre>\n',homepageUrl:"https://github.com/Astrocoders/reform#readme",repositoryUrl:"https://github.com/Astrocoders/reform",npmUrl:null,issuesUrl:"https://github.com/Astrocoders/reform/issues",slug:"packages/unpublished/Astrocoders/reform"}},pathContext:{id:"unpublished/Astrocoders/reform"}}}});
//# sourceMappingURL=path---packages-unpublished-astrocoders-reform-db122a6a32b07a43ca30.js.map