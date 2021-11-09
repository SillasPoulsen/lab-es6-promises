// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync

// Iteration 1 - using callbacks
function makePotatoes() {
  getInstruction(
    "mashedPotatoes",
    0,
    (step1) => {
      document.querySelector(
        "#mashedPotatoes"
      ).innerHTML += `<li>${step1}</li>`;
      getInstruction(
        "mashedPotatoes",
        1,
        (step2) => {
          document.querySelector(
            "#mashedPotatoes"
          ).innerHTML += `<li>${step2}</li>`;
          getInstruction(
            "mashedPotatoes",
            2,
            (step3) => {
              document.querySelector(
                "#mashedPotatoes"
              ).innerHTML += `<li>${step3}</li>`;

              getInstruction(
                "mashedPotatoes",
                3,
                (step4) => {
                  document.querySelector(
                    "#mashedPotatoes"
                  ).innerHTML += `<li>${step4}</li>`;
                  getInstruction(
                    "mashedPotatoes",
                    4,
                    (step5) => {
                      document.querySelector(
                        "#mashedPotatoes"
                      ).innerHTML += `<li>${step5}</li>`;
                      document
                        .querySelector("#mashedPotatoesImg")
                        .removeAttribute("hidden");
                    },
                    (error) => console.log(error)
                  );
                },
                (error) => console.log(error)
              );
            },
            (error) => console.log(error)
          );
        },
        (error) => console.log(error)
      );
    },
    (error) => console.log(error)
  );
}

makePotatoes();

// Iteration 2 - using promises
//
function makeSteak() {
  obtainInstruction("steak", 0)
    .then((step0) => {
      document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
      return obtainInstruction("steak", 1);
    })
    .then((step1) => {
      document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
      return obtainInstruction("steak", 2);
    })
    .then((step2) => {
      document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
      return obtainInstruction("steak", 3);
    })
    .then((step3) => {
      document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
      return obtainInstruction("steak", 4);
    })
    .then((step4) => {
      document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
      return obtainInstruction("steak", 5);
    })
    .then((step5) => {
      document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
      return obtainInstruction("steak", 6);
    })
    .then((step6) => {
      document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
      return obtainInstruction("steak", 7);
    })
    .then((step7) => {
      document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
    })
    .then(() => {
      document.querySelector("#steak").innerHTML += `<li>steak is ready</li>`;
    })
    .then(() => {
      document.querySelector("#steakImg").removeAttribute("hidden");
    })
    .catch((err) => {
      console.log("There was an error");
    });
}

makeSteak();

// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  try {
    const first = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${first}</li>`;

    const second = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${second}</li>`;

    const third = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${third}</li>`;

    const fourth = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${fourth}</li>`;

    const fifth = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${fifth}</li>`;

    const sixth = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${sixth}</li>`;

    const seventh = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${seventh}</li>`;
    document.querySelector(
      "#broccoli"
    ).innerHTML += `<li>"Broccoli is ready!"</li>`;

    //const eith = await obtainInstruction("broccoli", 7);
    document.querySelector("#broccoliImg").removeAttribute("hidden");
  } catch (error) {
    return "error";
  }
}

makeBroccoli();

// Bonus 2 - Promise all

const pr0 = obtainInstruction("brusselsSprouts", 0);
const pr1 = obtainInstruction("brusselsSprouts", 1);
const pr2 = obtainInstruction("brusselsSprouts", 2);
const pr3 = obtainInstruction("brusselsSprouts", 3);
const pr4 = obtainInstruction("brusselsSprouts", 4);
const pr5 = obtainInstruction("brusselsSprouts", 5);
const pr6 = obtainInstruction("brusselsSprouts", 6);
async function makeBrusselSprouts() {
  try {
    const values = await Promise.all([pr0, pr1, pr2, pr3, pr4, pr5, pr6]);

    values.forEach((instruction) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${instruction}</li>`;
    });

    document.querySelector(
      "#brusselsSprouts"
    ).innerHTML += `<li>Brussels sprouts are ready!</li>`;
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
  } catch (error) {
    console.log(err);
  }
}
makeBrusselSprouts();

/*
Promise.all([makePotatoes, makeSteak, makeBroccoli]).then(() => {
  obtainInstruction("brusselsSprouts", 0)
    .then((step0) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step0}</li>`;
      return brusselsSprouts[1];
    })
    .then((step1) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step1}</li>`;
      return brusselsSprouts[2];
    })
    .then((step2) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step2}</li>`;
      return brusselsSprouts[3];
    })
    .then((step3) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step3}</li>`;
      return brusselsSprouts[4];
    })
    .then((step4) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step4}</li>`;
      return brusselsSprouts[5];
    })
    .then((step5) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step5}</li>`;
      return brusselsSprouts[6];
    })
    .then((step6) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step6}</li>`;
      return brusselsSprouts[7];
    })
    .then((step7) => {
      document.querySelector(
        "#brusselsSprouts"
      ).innerHTML += `<li>${step7}</li>`;
    })
    .then((step7) => {
      document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");
    });
});
*/
