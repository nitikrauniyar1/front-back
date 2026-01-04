import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/api/jokes", (req, res) => {
  res.json([
    {
      id: 1,
      setup: "शेरे र रामे चोरी गर्न गएका थिए। रामेले सुन र पैसा चोरी गर्यो, तर शेरेले १ किलो हुलासको पिठो लिए।",
      punchline: "शेरे: 'हुलास भए अरु किन खोज्ने?'"
    },
    {
      id: 2,
      setup: "एउटा भ्यागुता ज्योतिषकोमा गएर आफ्नो भविष्य हेर्न भन्यो।",
      punchline: "ज्योतिष: 'तिम्रो जीवनमा राम्री केटी आउनेछ।' भ्यागुता: 'कहाँ भेट्छु?' ज्योतिष: 'Biology को Practical Lab मा।' भ्यागुता बेहोश!"
    },
    {
      id: 3,
      setup: "शेरेले एउटी केटीलाई 'I LOVE U' पठाउन चाह्यो तर डरायो।",
      punchline: "भोलिपल्ट मोबाइलमा आयो: 'Message Not delivered. Account balance: 0.17 Rupees. Please recharge in time.'"
    },
    {
      id: 4,
      setup: "एक जना नेपाली किन गाडी चढ्दैन?",
      punchline: "किनकि उसलाई 'Traffic jam' भन्दा 'Traffic dance' रमाइलो लाग्छ!"
    },
    {
      id: 5,
      setup: "कसरी नेपाली विद्यार्थी परीक्षा पास हुन्छ?",
      punchline: "Last minute मा पढेर र भाग्यमा भरोसा गरेर!"
    },
    {
      id: 6,
      setup: "मोबाइलको ब्याट्री किन चाँडै सकिन्छ?",
      punchline: "किनकि फेसबुक, टिकटक, र इन्स्टाग्राम सँगै चलाउँदा!"
    }
  ]);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
