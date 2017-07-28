package com.myapp;

import android.graphics.Color;
import android.os.Bundle;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.mehcode.reactnative.splashscreen.SplashScreen;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "myApp";
    }
    @Override
    protected void onCreate(Bundle savedInstanceState) {
      // Show the js-controlled splash screen
      SplashScreen.show(this, getReactInstanceManager());
      super.onCreate(savedInstanceState);
    }
}
