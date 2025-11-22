# 📘 **Mobiscroll Installation Guide (Clean Steps)**

## ✅ **Step 1 — Install Mobiscroll CLI**

This CLI is required for installation and configuration.

npm install -g @mobiscroll/cli


## ✅ **Step 2 — Login to Mobiscroll & Configure**

Login with the email & password from your Mobiscroll account.
https://mobiscroll.com/

mobiscroll config react

This command will:

Install @mobiscroll/react

Configure registry

Provide CSS import instructions

When prompted:

email/username: Use the same email used for your Mobiscroll account

secret key: You can find it in your Mobiscroll Account → Licenses

CSS : select CSS

If login is successful → proceed.

## ✅ **Step 3 — Add Mobiscroll Global CSS**

Open `src/App.tsx` and add:

```ts
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
```

This step is **mandatory** to make components display correctly.

---

## ✅ **Step 4 — Test Mobiscroll Installation**

Create a test file:

**`src/TestCalendar.tsx`**

```tsx
import React from "react";
import { Eventcalendar } from "@mobiscroll/react";

const TestCalendar = () => {
    const events = [{
        start: new Date(),
        end: new Date(),
        text: "Mobiscroll Working!"
    }];

    return (
        <div style={{ padding: 20 }}>
            <Eventcalendar data={events} />
        </div>
    );
};

export default TestCalendar;
```

Use this in `App.tsx`:

```tsx
import TestCalendar from "./TestCalendar";
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

export default function App() {
  return <TestCalendar />;
}

## ✅ **Step 5 — Run the App**

npm run dev or npm start

You should now see a working Mobiscroll calendar UI.
