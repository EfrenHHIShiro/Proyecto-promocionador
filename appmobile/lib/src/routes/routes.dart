import 'package:flutter/material.dart';

import 'package:appmobile/src/pages/auth/login_page.dart';
import 'package:appmobile/src/pages/Home_Page.dart';

Map<String, WidgetBuilder> getApplicationRoutes() {
  return <String, WidgetBuilder>{
    '/': (BuildContext context) => LoginPage(),
    'home': (BuildContext context) => HomePage(),
  };
}
