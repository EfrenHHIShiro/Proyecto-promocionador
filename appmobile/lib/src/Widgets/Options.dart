import 'package:flutter/material.dart';
import 'package:flutter_svg/svg.dart';

import '../constants.dart';

class Options extends StatelessWidget {
  const Options({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        height: 80,
        child: Row(
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                children: <Widget>[
                  Container(
                    decoration: BoxDecoration(
                      color: kTextWhiteColor,
                      
                    ),
                    child: Padding(
                      padding: EdgeInsets.all(4),
                      child: Image.asset(
                        'assets/images/niveles.png',
                        width: 25,
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 5,
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                children: <Widget>[
                  Container(
                    decoration: BoxDecoration(
                      color: kTextWhiteColor,
                      boxShadow: [
                        BoxShadow(
                          color: Colors.grey[300],
                          offset: Offset(4, 6),
                          blurRadius: 20,
                        )
                      ],
                    ),
                    child: Padding(
                      padding: EdgeInsets.all(4),
                      child: SvgPicture.asset(
                        'assets/images/distancia.svg',
                        height: 20,
                        width: 20,
                        semanticsLabel: 'Menor Distancia'
                      ),
                    ),
                  ),
                  
                  SizedBox(
                    height: 5,
                  ),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Column(
                children: <Widget>[
                  Container(
                    decoration: BoxDecoration(
                      color: kTextWhiteColor,
                      boxShadow: [
                        BoxShadow(
                          color: Colors.grey[300],
                          offset: Offset(4, 6),
                          blurRadius: 20,
                        )
                      ],
                    ),
                    child: Padding(
                      padding: EdgeInsets.all(4),
                      child: SvgPicture.asset(
                        'assets/images/estrella.svg',
                        height: 20,
                        width: 20,
                        semanticsLabel: 'Más de 4.6'
                      ),
                    ),
                  ),
                  
                  SizedBox(
                    height: 5,
                  ),
                ],
              ),
            ),
          ],
        ));
  }
}
