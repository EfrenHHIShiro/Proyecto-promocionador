import 'package:appmobile/src/pages/SplashScreen.dart';
import 'package:appmobile/src/pages/auth/ChangePassword_Page.dart';
import 'package:appmobile/src/pages/auth/Register_Page.dart';
import 'package:appmobile/src/pages/auth/login_page.dart';
import 'package:flutter/material.dart';
import 'package:appmobile/src/pages/Home_Page.dart';

Map<String, WidgetBuilder> getApplicationRoutes() {
  return <String, WidgetBuilder>{
    '/': (BuildContext context) => SplashScreen(),
    'home': (BuildContext context) => HomePage(),
    'register': (BuildContext context) => RegisterPage(),
    'changepass': (BuildContext context) => ChangePasswordPage(),
    'login': (BuildContext context) => LoginPage(),
  };
}
