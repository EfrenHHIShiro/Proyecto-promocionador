import 'package:flutter/material.dart';


import 'package:appbusiness/pages/Home_page.dart';
import 'package:appbusiness/pages/Login_page.dart';


Map<String, WidgetBuilder> getApplicationRoutes() {
  return <String, WidgetBuilder>{
    '/' : ( BuildContext context ) => LoginPage(),
    'home' : ( BuildContext context ) => HomePage(),
  };
}