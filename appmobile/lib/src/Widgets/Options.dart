import 'package:flutter/material.dart';

import '../constants.dart';

class Options extends StatelessWidget {
  const Options({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 80,
      child: ListView.builder(
          scrollDirection: Axis.horizontal,
          itemCount: 3,
          itemBuilder: (_, index) {
            return Padding(
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
                      child: Image.asset(
                        'assets/images/niveles.png',
                        width: 25,
                      ),
                    ),
                  ),
                  SizedBox(
                    height: 5,
                  ),
                  Text(
                    "Favoritos",
                    style: TextStyle(
                      color: Colors.black,
                      fontSize: 12,
                    ),
                  )
                ],
              ),
            );
          }),
    );
  }
}
