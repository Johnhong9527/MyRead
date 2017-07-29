package com.myapp;

import android.graphics.Color;
import android.os.Bundle;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.view.Gravity;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.mehcode.reactnative.splashscreen.SplashScreen;
import com.reactnativenavigation.controllers.SplashActivity;

public class MainActivity extends SplashActivity {
    @Override
    public LinearLayout createSplashLayout() {
        LinearLayout view = new LinearLayout(this);
        ImageView imageView = new ImageView(this);

        view.setBackgroundColor(Color.parseColor("#ffffff"));
        view.setGravity(Gravity.CENTER);


        view.addView(imageView);
        return view;
    }
}

// public class MainActivity extends SplashActivity {

//     /**
//      * Returns the name of the main component registered from JavaScript.
//      * This is used to schedule rendering of the component.
//      */
//     @Override
//     protected String getMainComponentName() {
//         return "myApp";
//     }
//     @Override
//     protected void onCreate(Bundle savedInstanceState) {
//       // Show the js-controlled splash screen
//       SplashScreen.show(this, getReactInstanceManager());
//       super.onCreate(savedInstanceState);
//     }
// }
