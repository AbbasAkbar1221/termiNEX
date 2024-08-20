function setBackgroundColor() {
    let angle = Math.round(Math.random() * 30) + 10;
    let hue = Math.round(Math.random() * 255);
    let colorA = `HSL(${hue}, 80%, 70%)`;
    let colorB = `HSL(${hue - 255 / 2}, 80%, 70%)`;
    document.body.style.background = `linear-gradient(${angle}deg, ${colorA}, ${colorB})`;
  }
  setBackgroundColor();
  
  document.addEventListener("DOMContentLoaded", function () {
    const targetElement = document.getElementById("getStartedNodeId");
    const textElement = document.getElementById("textToPrint");
    const textToPrint = textElement.textContent;
    const typingDelay = 50; // Delay between each letter (in milliseconds)
    const startDelay = 3000; // Delay before starting the typing (in milliseconds)
    let charIndex = 0;
  
    textElement.innerHTML = "";
  
    // Create the cursor element and append it as a child
    const cursor = document.createElement("span");
    cursor.id = "typecursor";
  
    // Append the cursor initially
    targetElement.appendChild(cursor);
  
    // Function to type letters
    function typeLetter() {
      if (charIndex < textToPrint.length) {
        cursor.remove(); // Remove the cursor temporarily
        textElement.innerHTML += textToPrint.charAt(charIndex);
        textElement.appendChild(cursor); // Re-append the cursor after adding the letter
        charIndex++;
      } else {
        clearInterval(typingInterval); // Stop the typing interval
        cursor.classList.add("blinking-cursor"); // Add blinking effect after typing is complete
  
        setTimeout(() => {
          cursor.style.display = "none";
          helpText();
  
          pressEnter();
        }, 1000);
      }
    }
  
    let typingInterval;
    setTimeout(() => {
      typingInterval = setInterval(typeLetter, typingDelay);
    }, startDelay);
  });
  
  function helpText() {
    let helpCammandPara = document.querySelector("#helpCammandPara");
    let help = document.querySelector("#help");
    helpCammandPara.style.visibility = "visible";
    help.select();
  }
  
  function pressEnter() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        const commandInput = document.getElementById("help");
        const command = commandInput.value.toLowerCase();
        let mainContent = document.getElementById("mainContent");
        let thanks = document.getElementById("thanks");
        let help = document.getElementById("helpCammandPara");
        const textElement = document.getElementById("textToPrint");
        textElement.innerHTML = "";
  
        mainContent.style.display = "none";
        thanks.style.display = "none";
        help.style.display = "none";
  
        let writeCommand = document.getElementById("writeCommand");
        writeCommand.innerHTML = `Executed Command: ${command}`;
  
        switch (command) {
          case "help":
            nextCommand(command);
            break;
          case "github":
            setTimeout(() => {
              window.open("https://github.com/AbbasAkbar1221", "_blank");
            }, 7000);
            writeCommand.innerHTML = "Executed Command: github";
            commandInput.value = "help";
            nextCommand(command);
            break;
          case "linkedin":
            setTimeout(() => {
              window.open(
                "https://www.linkedin.com/in/abbas-akbar/",
                "_blank"
              );
            }, 7000);
  
            writeCommand.innerHTML = "Executed Command: linkedin";
            commandInput.value = "help";
            nextCommand(command);
            break;
  
            case "resume":
              setTimeout(() => {
                window.open(
                  "https://drive.google.com/file/d/1zR9SNHsYSj30vRtzYE9TJ2HJzMH5Dly_/view?usp=sharing",
                  "_blank"
                );
              }, 7000);
    
              writeCommand.innerHTML = "Executed Command: resume";
              commandInput.value = "help";
              nextCommand(command);
              break;
  
            case "bio":
            writeCommand.innerHTML = "Executed Command: bio";
            commandInput.value = "help";
            nextCommand(command);
            break;
  
            case "random":
            writeCommand.innerHTML = "Executed Command: random";
            commandInput.value = "help";
            nextCommand(command);
            break;
  
            case "date":  
            writeCommand.innerHTML = "Executed Command: date";
            commandInput.value = "help";
            nextCommand(command);
            break;
  
            case "contact":
            writeCommand.innerHTML = "Executed Command: contact";
            commandInput.value = "help";
            nextCommand(command);
            break;
  
            case "about":
            writeCommand.innerHTML = "Executed Command: about";
            commandInput.value = "help";
            nextCommand(command);
            break;
  
          default:
            writeCommand.innerHTML = `Executed Command: ${command}`;
            commandInput.value = "help";
            nextCommand(command);
            break;
        }
      }
    });
  }
  
  function nextCommand(commandInput) {
    const greetings = [
      "Salaam (Arabic)",
      "Namaste (Hindi)",
      "Hello (English)",
      "Bonjour (French)",
      "Hola (Spanish)",
      "Guten Tag (German)",
      "Ciao (Italian)",
      "Konnichiwa (Japanese)",
      "Annyeong (Korean)",
    ];
  
    // Randomly select a greeting
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  
    const targetElement = document.getElementById("getStartedNodeId");
    const textElement = document.getElementById("textToPrint");
    textElement.innerHTML = "";
  
    let textToPrint = "";
  
    switch (commandInput) {
      case "github":
        textToPrint = `${greeting}! Most of Abbas's contribution goes to GitHub Enterprise, hence they may not be visible in his public profile. Here is Abbas's GitHub URL: https://github.com/AbbasAkbar1221. Hold on, opening in a new tab. Please check if the pop-ups are not blocked.`;
        break;
      case "linkedin":
        textToPrint = `${greeting}! Abbas is a professional software engineer and has a LinkedIn profile. Here is Abbas's LinkedIn URL: https://www.linkedin.com/in/abbas-akbar/. Hold on, opening in a new tab. Please check if the pop-ups are not blocked.`;
        break;
  
        case "resume":
        textToPrint = `${greeting}! Thanks for the query. Get my resume here: https://drive.google.com/file/d/1zR9SNHsYSj30vRtzYE9TJ2HJzMH5Dly_/view?usp=sharing. Hold on, opening in a new tab. Please check if the pop-ups are not blocked`;
        break;
  
        case "bio":
        textToPrint = `${greeting}! Here's a quick info about Abbas. Abbas is a software engineer with a passion for web development. He has experience in building web applications using JavaScript, React, Node.js, and other technologies. He is always eager to learn new things and improve his skills.`;
        break;
        case "random":
        textToPrint = `${greeting}! Here's a fact about Abbas. Please try again....`;
        break;
  
        case "date":
        textToPrint = `${greeting}! The current date is: ${new Date().toLocaleString('en-US')}`;
        break;  
  
        case "contact":
        textToPrint = `${greeting}!  Abbas is reachable at: abbasakbar765@gmail.com. You maybe be looking for the following commands: linkedin, github, about`;
        break;
  
        case "about":
        textToPrint = `${greeting}! Here's a quick info about Abbas. Abbas is a skilled web developer with a focus on the MERN stack, showcasing a strong ability to build dynamic and interactive web applications. With experience in both Client-Side Rendering (CSR) and Server-Side Rendering (SSR), Abbas has developed complex projects that demonstrate his expertise in JavaScript, Express.js, and EJS templating. He is adept at problem-solving, regularly engaging with platforms like LeetCode to sharpen his coding abilities. Abbas is also committed to continuous learning, applying his knowledge to real-world projects, and staying up-to-date with the latest industry trends.`;
        break;
  
      case "help":
        textToPrint = `${greeting}! The following commands are the only ones that will work: help, resume, bio, linkedin, random, github, contact, date. But don't try to gain access by running commands like sudo. These commands will come soon: projects, clear, new, man, home.`;
        break;
  
      default:
        textToPrint = `How unfortunate, that's an unrecognized command. Request will only be processed for the following commands: help, resume, bio, linkedin, random, github, contact, date. But don't try to gain access by running commands like sudo. These commands will come soon: projects, clear, new, man, home.`;
    }
  
    const typingDelay = 20; // Delay between each letter (in milliseconds)
  
    let charIndex = 0;
  
    const cursor = document.createElement("span");
    cursor.id = "typecursor";
  
    // Append the cursor initially
    targetElement.appendChild(cursor);
    function typeLetter() {
      if (charIndex < textToPrint.length) {
        cursor.remove(); // Remove the cursor temporarily
        textElement.innerHTML += textToPrint.charAt(charIndex);
        textElement.appendChild(cursor); // Re-append the cursor after adding the letter
        charIndex++;
      } else {
        clearInterval(typingInterval); // Stop the typing interval
        cursor.classList.add("blinking-cursor"); // Add blinking effect after typing is complete
  
        setTimeout(() => {
          cursor.style.display = "none";
          document.getElementById("helpCammandPara").style.display = "inline";
          helpText();
        }, 1000);
      }
    }
    let typingInterval = setInterval(typeLetter, typingDelay);
  }
  