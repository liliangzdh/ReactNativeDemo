package com.reactnativedemo;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Bundle;
import android.support.annotation.Nullable;
import android.support.v4.app.TaskStackBuilder;
import android.util.Log;

import com.reactnativedemo.utils.JumpUtils;
import com.reactnativedemo.utils.ViewUtils;

public class IntentParseActivity extends Activity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Uri data = getIntent().getData();
        try {
            if (data != null) {
//                Log.i("test", "url: " + data.toString());
//                Intent resultIntent = JumpUtils.parseIntent(this, data.toString(), null);
//                if (resultIntent == null) {
//                    Log.e("test", "没有找到对应的intent");
//                    finish();
//                    return;
//                }
//                resultIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
//                if (ViewUtils.isLaunchedActivity(this, MainActivity.class)){
//                    Log.e("test","重新启动");
//                    startActivity(resultIntent);
//                } else{
////                    TaskStackBuilder stackBuilder = TaskStackBuilder.create(this)
////                            .addParentStack(resultIntent.getComponent())
////                            .addNextIntent(resultIntent);
//
////                    stackBuilder.startActivities();
//                    startActivity(resultIntent);
//                    Log.e("test","启动新的页面");
//                }
                Log.e("test","启动新的页面");
                Intent intent = new Intent(this, MainActivity.class);
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                startActivity(intent);
                finish();
            }
        } catch (Exception e) {
            e.printStackTrace();

            Log.e("test", "异常了。");
            finish();
        }

    }
}
