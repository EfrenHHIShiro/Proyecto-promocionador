import 'package:flutter/material.dart';

import '../constants.dart';

class Eventos extends StatelessWidget {
  const Eventos({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
        child: Column(
      children: <Widget>[
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: <Widget>[
              Row(
                children: <Widget>[
                  Column(
                    children: <Widget>[
                      Container(
                        decoration: BoxDecoration(
                          color: kTextWhiteColor,
                        ),
                        child: Text(
                          'Eventos y Promociones.',
                          style: TextStyle(fontSize: 18),
                        ),
                      ),
                    ],
                  ),
                  Column(
                    children: <Widget>[
                      Container(
                        width: 125,
                        child: Align(
                          alignment: Alignment.topRight,
                          child: MaterialButton(
                            shape: new RoundedRectangleBorder(
                                borderRadius: new BorderRadius.circular(90.0)),
                            onPressed: () {},
                            color: kButtonGreen,
                            child: Text('Ver mas',
                                style: TextStyle(color: Colors.white)),
                          ),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
              SizedBox(
                height: 5,
              ),
              Row(children:<Widget>[],),

            ],
          ),
        ),
      ],
    ));
  }
}
