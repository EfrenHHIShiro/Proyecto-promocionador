import 'package:flutter/material.dart';
import 'package:appmobile/src/pages/home_page.dart';
import 'package:appmobile/src/routes/routes.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      title: 'App Users',
      debugShowCheckedModeBanner: false,
      initialRoute: '/',
      routes: getApplicationRoutes(),
      onGenerateRoute: (settings) {
        return MaterialPageRoute(builder: (BuildContext context) => HomePage());
      },
    );
  }
}
