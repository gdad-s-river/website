---
slug: defence-emails
date: 2019-06-21
title: 'Defence Emails'
description: 'The art of subtly defending oneself in emails'
categories: ['work']
keywords: ['email', 'defence', 'art']
banner: './images/banner.jpg'
bannerCaption: 'Photo by Austin Distel on Unsplash'
published: true
author: 'Arihant Verma'
---

I have worked in two companies since after I graduated in 2015. In both companies ( less in the second one, mostly from teams in Gurgaon ), I've seen a culture of defending in emails in sly and covert manner. The defending automatically takes away a chance for people to feel that they are working on a product together. It starts weird blame games, which does no good to anybody. However it does open a new avenue to write about grouse about them. This post is a light weight grousing post.

Read this email I got in my work inbox today —

> As per the hotel-fe team (my team), value of `image_url` key is coming is `'null'` string, <u>which is causing error at hotel-fe end.</u>
>
> This behavior was since UGC exposed this API a long time back. <u>We were told yesterday</u> that this value is causing issue. <u>Now we have</u> fixed this issue. and it will be live once the deployment process will be enabled.

The underlined things are what is preposterous about the email. It's about a code bug we found in one of the other team's code (the email above was written by one of that team's mate). **The bug/issue was preposterous, and should have been punishable by cutting one day's salary of the person who coded it ( and this person, let's call him SS, who is covertly justifying it )**. So <u>_which is causing error at hotel-fe front end_</u>, <u>_we were told yesterday_</u>, <u>_now we have_</u>, are slap worthy phrases. They should be invalid.

This was the bug —

The Reviews and Rating's API fetches user generated questions and answers ( like on amazon ). The API was wrongly sending `'null'` as the value of some of the avatar images of the users. That was causing an extra image request to the server, by the virtue of

```html
<img src="null">
```

Because the app server was not anticipating anything like this ( our mistake ), the server was letting that request pass through.

We were doing a blunder on our app server — letting any kind of requests pass through that path. In other words that path should have been strict.

Strict path means something like — if a user is visiting a **`facebook.com/<username>`**, it should open that profile and timeline page. But if a user visits **`facebook.com/<username>/<gibberish>`**, the facebook server should either re direct the user to **`facebook.com/<username>/`** or redirect to a 'Not Found What You Are Looking For' page. Our app server was letting the gibberish kind of request in, doing some weird stuff in the background ( which was harming us, costing us thousands of rupees ).

The weird stuff was that it was causing resetting of a crucial cookie used to evaluate promo codes for our users. Given it was bad on our part to let scrupulous requests come to our app server, it wasn't as big a blunder as the `'null'` thing I explained above. Giving `'null'` as a response to anything in a JSON response is preposterous and unacceptable.

SS called me up to have the audacity to ask (this is how jugaadi we Indians are), the levels of hierarchy of the JSON response, at which I wanted the `'null'` thing to be fixed ( ALL THE LEVELS SHOULD BE FIXED! )

To a non tech person who doesn't know what a JSON object looks like, following might be a JSON response of question asked by and the its answers –

```json
{
  "question": "Why did you do that SS?",
  "who_asked": "Asker's Name",
  "asker_image": "null", ---> level 1
  "client_answer": {
    "client_image": "null", ---> level 2(a)
    "client_name": "Major General"
  },
  "user_answers": {
    "user_id_1": {
      "user1_image": "null" ---> level 2(b)
    },
    "user_id_2": {
      "user2_image": "null"
    }
  }
}
```

He asked me what _level_ of the response do I want to not have `'null'` as images' value anymore. I got so confused that I had to ask him what his question was. I also got confused about the cellular network. I thought the network was wobbly. It wasn't. He sounded as if he was a member of a street jumping gang. I had to guess from how his words sounded, and match it up with the vocabulary I have in my mind. Phonetics helped.

To a non tech person — this is the most disastrous data response, a person responsible for sending any kind of data can send. `'null'` is like talking about sex in India. It's worth punishing. Unlike talking about sex, or kissing in public, it should be.

It's one of the reasons I have not particularly liked working in a tech company in India. Work feels like work. I'd like to work at a place, where work, and the workplace and ALL the people I'd have to talk to at work, feel like home. Fortunately at least the team I'm a core member of, is the most fun team I could ever have asked for.

This is a story of most of the workplaces here. I know there are exceptions. I'd love to be worthy of working in one of them.
