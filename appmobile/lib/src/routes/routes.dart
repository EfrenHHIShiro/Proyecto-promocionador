import 'package:appmobile/src/pages/SplashScreen.dart';
import 'package:flutter/material.dart';
import 'package:appmobile/src/pages/Home_Page.dart';

Map<String, WidgetBuilder> getApplicationRoutes() {
  return <String, WidgetBuilder>{
    '/': (BuildContext context) => SplashScreen(),
    'home': (BuildContext context) => HomePage(),
  };
}
