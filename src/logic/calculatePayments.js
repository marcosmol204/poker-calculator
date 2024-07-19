export const calculatePayments = (players) => {
  const totalBought = players.reduce((acc, curr) => {
    acc += curr.bought;
    return acc;
  }, 0);
  const totalChips = players.reduce((acc, curr) => {
    acc += curr.chips;
    return acc;
  }, 0);

  if (totalChips !== totalBought) {
    return [];
  }

  const playersToBePaid = players
    .filter((el) => el.chips > el.bought)
    .map((el) => {
      return {
        ...el,
        received: 0,
      };
    });
  const playersThatShouldPay = players
    .filter((el) => el.chips < el.bought)
    .map((el) => {
      return {
        ...el,
        paid: 0,
      };
    });

  const paymentDetails = [];

  for (let i = 0; i < playersToBePaid.length; i++) {
    const playerToBePaid = playersToBePaid[i];

    const chipsToComplete =
      playerToBePaid.chips - playerToBePaid.bought - playerToBePaid.received;

    if (chipsToComplete === 0) {
      continue;
    }

    while (
      playerToBePaid.received !==
      playerToBePaid.chips - playerToBePaid.bought
    ) {
      for (let i = 0; i < playersThatShouldPay.length; i++) {
        const playerThatShouldPay = playersThatShouldPay[i];
        const restForPay =
          playerThatShouldPay.bought -
          playerThatShouldPay.chips -
          playerThatShouldPay.paid;

        if (restForPay === 0) {
          continue;
        }

        const totalToReceive = chipsToComplete - playerToBePaid.received;
        if (totalToReceive > restForPay) {
          playerThatShouldPay.paid += restForPay;
          playerToBePaid.received += restForPay;
          const payment = {
            for: playerToBePaid.name,
            from: playerThatShouldPay.name,
            amount: restForPay,
          };
          paymentDetails.push(payment);
          break;
        }

        playerThatShouldPay.paid += totalToReceive;
        playerToBePaid.received += totalToReceive;
        const payment = {
          for: playerToBePaid.name,
          from: playerThatShouldPay.name,
          amount: totalToReceive,
        };
        paymentDetails.push(payment);
        break;
      }
    }
  }
  return paymentDetails;
};
