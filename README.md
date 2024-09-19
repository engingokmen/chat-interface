# React chat application

This is a simple chat application that can send and receive messages via its interface. It also provides some special features like image display, combo box selection, and auto-complete.

## Demo

[Go to demo](https://engingokmen.click/chat-app)

## What this app does

1. gets messages and displays on the screen
2. sends new message
3. displays image
4. displays a combo box with options
5. auto-complete from a default list

## How to run

1. Clone the repository
2. Install dependencies with `npm install`
3. Run `npm start` to start the development server
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Wireframe of the app

[Go to wireframe](https://www.figma.com/board/Iimb4G6rguGKCdcuQFTNPL/chatApp?node-id=0-1&t=z3iLGbM8lzJMiiKg-1)

Core functionality

- Chat interface

  - sends and receieves messages

- Messages inside a scrollable area
- Text input area

Special features

- Image display

  - "/image"
  - placeholder eg: "/image3"
  - image service https://picsum.photos/

- Combo box selection

  - "/select"
  - displays a combobox with at least 5 options
  - selected option is sent as a message

- Auto-complete

  - A list of at least 20 common chat phrases or words
  - As the user types, suggest completions from this list. One example is "hel"

- Responsive layout
  - mobile and desktop
  - CSS flexbox for layout management

Technologies

- React with typescript which is suitable to create a reusable chat app interface for the client side.
- State management could be handled by React context and reducer for this project.
- Styled-components is used for styling which is one of the most popular CSS-in-JS libraries in the Github community. [Styled-components Github](https://github.com/styled-components/styled-components)
  - It isolates component styles. So makes it easier to maintain and debug.
