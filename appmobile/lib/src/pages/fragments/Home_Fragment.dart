import 'package:appmobile/src/Widgets/CustomText.dart';
import 'package:appmobile/src/Widgets/Options.dart';
import 'package:appmobile/src/Widgets/SearchContainer.dart';
import 'package:appmobile/src/constants.dart';
import 'package:appmobile/src/pages/fragments/Widgets/Events.dart';
import 'package:flutter/material.dart';

class HomeFragment extends StatelessWidget {
  const HomeFragment({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kSwitchColor,
      body: SafeArea(
        child: ListView(
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Padding(
                  padding: EdgeInsets.all(8.0),
                  child: Text(
                    "Where is the Bar?",
                    style: TextStyle(fontSize: 18),
                  ),
                ),
                Stack(
                  children: [
                    IconButton(
                      icon: Icon(Icons.notifications_none),
                      onPressed: () {},
                    ),
                    Positioned(
                      top: 10,
                      right: 12,
                      child: Container(
                        height: 10,
                        width: 10,
                        decoration: BoxDecoration(
                          color: kAlertkColor,
                          borderRadius: BorderRadius.circular(20),
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
            Padding(
              padding: const EdgeInsets.all(8.0),
              child: Container(
                decoration: BoxDecoration(
                  color: kTextWhiteColor,
                  boxShadow: [
                    BoxShadow(
                      color: Colors.grey[300],
                      offset: Offset(1, 1),
                      blurRadius: 4,
                    ),
                  ],
                ),
                child: SearchContainer(),
              ),
            ),
            SizedBox(
              height: 5,
            ),
            Options(),

            Stack(
              children: <Widget>[
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 10),
                  child: Container(
                    height: 83,
                    width: 400,
                    decoration: BoxDecoration(
                      color: kPrimaryColor,
                      borderRadius: BorderRadius.circular(24),
                    ),
                  ),
                ),
                Row(
                  children: <Widget>[
                    Padding(
                      padding: const EdgeInsets.symmetric(
                          horizontal: 25, vertical: 10),
                      child: Image.asset(
                        'assets/images/avatar.jpg',
                        height: 64,
                        width: 64,
                      ),
                    ),
                    Column(
                      mainAxisSize: MainAxisSize.min,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: <Widget>[
                        Text(
                          'La Negrita Cantina',
                          style: TextStyle(
                            color: kTextWhiteColor,
                            fontFamily: 'Avenir',
                            fontWeight: FontWeight.w500,
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(top: 10),
                          child: Text(
                            '16 - 20 mins • 6,0 km • 4,5',
                            style: TextStyle(
                              color: kTextWhiteColor,
                              fontFamily: 'Avenir',
                              fontWeight: FontWeight.w500,
                            ),
                          ),
                        ),
                      ],
                    ),
                    Column(
                      children: <Widget>[
                        Padding(
                          padding: const EdgeInsets.only(top: 25),
                          child: Icon(
                            Icons.star,
                            color: Colors.yellow,
                          ),
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            ),

            //Eventos y Promociones
            // Row(
            //   mainAxisAlignment: MainAxisAlignment.spaceBetween,
            //   children: [
            //     Padding(
            //       padding: EdgeInsets.all(8.0),
            //       child: CustomText(text: "Eventos y promociones", size: 20),
            //     ),
            //     Stack(
            //       children: [
            //         IconButton(
            //           icon: Icon(Icons.notifications_none),
            //           onPressed: () {},
            //         ),
            //       ],
            //     ),
            //   ],
            // ),
          ],
        ),
      ),
    );
  }
}
