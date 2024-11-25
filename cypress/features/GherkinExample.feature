Feature: Login usuario y contraseña correctos

    cuando el usuario y la contraseña sean correctos debera iniciar sesion correctamente

    Scenario Outline: Login con usuario y contraseña
        Given  url del sitio
        Then la pagina home debera visualizarse correctamente
        When click sobre el boton 'Signup / Login'
        Then el formulario 'Login to your account' debera visible
        When el usuario ingrese a '<email>' y  '<password>'
        And click sobre el boton 'login'
        Then el usuario debera mostrar 'Logged in as username'
    Examples: 
    | email | password             |
    | xavomawusse-1109@yopmail.com       | AJghEJY2g3S5Ay      |