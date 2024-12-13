export interface Item {
  id: string;
  mainName: string;
  orderName: string;
  checked: boolean;
}

export interface ChategoryItem {
  id: string;
  mainName: string;
  orderName: string;
  children: ChategoryItem[] | Item[];
}

export const transformedData: ChategoryItem[] = [
  {
    id: "DXPdg-5n4h",
    mainName: "Drinks",
    orderName: "-",
    children: [
      {
        id: "H1oESo0neR",
        mainName: "Wine",
        orderName: "-",
        children: [
          {
            id: "Fqn3lNx2U1",
            mainName: "White Wine",
            orderName: "-",
            children: [
              {
                id: "5RKUJbL-9g",
                mainName: "Sauvignon Blanc",
                orderName: "-",
                children: [
                  {
                    id: "trjgbashO-",
                    mainName: "New Zealand Sauvignon Blanc",
                    orderName: "Whatever Brand",
                    checked: false,
                  },
                  {
                    id: "frjgbashO-",
                    mainName: "French Sauvignon Blanc",
                    orderName: "Another Brand",
                    checked: false,
                  },
                ],
              },
              {
                id: "5RKUJbL-9g",
                mainName: "Chardonnay",
                orderName: "-",
                children: [
                  {
                    id: "trjgbashO-",
                    mainName: "New Zealand Chardonnay",
                    orderName: "Chablis",
                    checked: false,
                  },
                  {
                    id: "frjgbashO-",
                    mainName: "French Chardonnay",
                    orderName: "Some other",
                    checked: false,
                  },
                ],
              },
            ],
          },
          {
            id: "Fqn3lNx2U1",
            mainName: "Red Wine",
            orderName: "-",
            children: [
              {
                id: "5RKUJbL-9g",
                mainName: "Cabernet Sauvignon",
                orderName: "-",
                children: [
                  {
                    id: "trjgbashO-",
                    mainName: "New Zealand Cabernet Sauvignon",
                    orderName: "-",
                    checked: false,
                  },
                  {
                    id: "frjgbashO-",
                    mainName: "French Cabernet Sauvignon",
                    orderName: "-",
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "XSErGz7OjA",
        mainName: "Beer",
        orderName: "-",
        children: [
          {
            id: "YreqPjMxVo",
            mainName: "Draught",
            orderName: "-",
            children: [
              {
                id: "5.venHMifj",
                mainName: "Pint",
                orderName: "-",
                children: [
                  {
                    id: "fdgkjhdf",
                    mainName: "-",
                    orderName: "Heineken",
                    checked: false,
                  },
                  {
                    id: "fdgkjhdsf",
                    mainName: "-",
                    orderName: "Budweiser",
                    checked: false,
                  },
                ],
              },
              {
                id: "5.venHMifj",
                mainName: "Half Pint",
                orderName: "-",
                children: [
                  {
                    id: "fdgkjhdf",
                    mainName: "-",
                    orderName: "Heineken",
                    checked: false,
                  },
                  {
                    id: "fdgkjhdsf",
                    mainName: "-",
                    orderName: "Budweiser",
                    checked: false,
                  },
                ],
              },
            ],
          },
          {
            id: "YreqPjMxVo",
            mainName: "Bottled",
            orderName: "-",
            children: [
              {
                id: "5.venHMifj",
                mainName: "500ml",
                orderName: "-",
                children: [
                  {
                    id: "fdgffdkjhdf",
                    mainName: "-",
                    orderName: "Staropramen",
                    checked: false,
                  },
                  {
                    id: "fdgkfdfffjhdsf",
                    mainName: "-",
                    orderName: "Heineken",
                    checked: false,
                  },
                ],
              },
              {
                id: "5.venHMiffj",
                mainName: "330ml",
                orderName: "-",
                children: [
                  {
                    id: "fdgkjdfdfdfhdf",
                    mainName: "-",
                    orderName: "Leffe",
                    checked: false,
                  },
                  {
                    id: "fdgkdsafdfdfdjhdsf",
                    mainName: "-",
                    orderName: "Corona",
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "xEiBAGV6lX",
    mainName: "Food",
    orderName: "-",
    children: [
      {
        id: ".32NKjUyF4",
        mainName: "Mains",
        orderName: "-",
        children: [
          {
            id: "aYPzQX6Oh3",
            mainName: "Steaks",
            orderName: "-",
            children: [],
          },
          {
            id: "k1B5TlJzaU",
            mainName: "Salads",
            orderName: "-",
            children: [
              {
                id: "RY7-lk1NYA",
                mainName: "Salads",
                orderName: "-",
                children: [
                  {
                    id: "GtVGl1De55",
                    orderName: "Ceasar Salad",
                    mainName: "-",
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "H1dkj5tOLj",
        mainName: "Snacks",
        orderName: "-",
        children: [
          {
            id: "ucnMGU29ll",
            mainName: "Chips",
            orderName: "-",
            children: [
              {
                id: "pfZD0GOwKw",
                mainName: "Doritos",
                orderName: "-",
                children: [
                  {
                    id: "v8sjSB6uW3",
                    mainName: "-",
                    orderName: "Doritos",
                    checked: false,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
