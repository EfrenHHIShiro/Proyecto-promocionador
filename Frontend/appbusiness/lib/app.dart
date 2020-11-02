import 'package:flutter/material.dart';

import 'package:appbusiness/pages/Home_page.dart';
import 'package:appbusiness/routes/routes.dart';

class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return MaterialApp(
      title: 'App Resources',
      debugShowCheckedModeBanner: false,
      initialRoute: '/',
      routes: getApplicationRoutes(),
      onGenerateRoute: ( settings ){
        return MaterialPageRoute(
          builder: ( BuildContext context ) => HomePage()
        );
      },
    );
  }

}