---
layout: post
title: How to make pubCenter AdControl Theme Aware
date: 2012-07-02 19:55
author: kunruch
comments: true
categories: [News and Announcements]
---
[sourcecode language="xml"]
&lt;UserControl.Resources&gt;
        &lt;Style x:Key=&quot;AdControlCustomColorStyle&quot; TargetType=&quot;my:AdControl&quot;&gt;
            &lt;Setter Property=&quot;Template&quot;&gt;
                &lt;Setter.Value&gt;
                    &lt;ControlTemplate TargetType=&quot;my:AdControl&quot;&gt;
                        &lt;Border x:Name=&quot;ControlBorder&quot; BorderBrush=&quot;{TemplateBinding BorderBrush}&quot;&gt;
                            &lt;Border.Resources&gt;
                                &lt;Style TargetType=&quot;TextBlock&quot;&gt;
                                    &lt;Setter Property=&quot;Foreground&quot; Value=&quot;{StaticResource PhoneForegroundBrush}&quot;/&gt;
                                &lt;/Style&gt;
                            &lt;/Border.Resources&gt;
                            &lt;StackPanel x:Name=&quot;LayoutRoot&quot; Background=&quot;{StaticResource PhoneBackgroundBrush}&quot; /&gt;
                        &lt;/Border&gt;
                    &lt;/ControlTemplate&gt;
                &lt;/Setter.Value&gt;
            &lt;/Setter&gt;
        &lt;/Style&gt;
    &lt;/UserControl.Resources&gt;
    &lt;Grid x:Name=&quot;LayoutRoot&quot; Background=&quot;Transparent&quot;/&gt;
[/sourcecode]
