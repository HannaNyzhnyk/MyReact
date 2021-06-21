export const getGoods = () => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {
                    id: 108,
                    Article: '"5M62000005M6X6A120"',
                    Name: "DIN933 Болт М16х110 8.8 цб пр EU",
                    GPropValues: [
                        {TypeID: 102, Name: "Стандарт (група)", Values: "DIN 933"},
                        {TypeID: 103, Name: "Матеріал", Values: "сталь"}
                    ],
                    BasePrice: 4.69,
                    CategoryName: "Болти з шестигранною головкою",
                    SmallFotoFileName: "DIN933_white_zinc.png"
                },
                {
                    id: 109,
                    Article: "N5M60000N5M6X85000",
                    Name: "DIN934 Болт М18х50 А2 пр",
                    GPropValues: [
                        {TypeID: 102, Name: "Стандарт (група)", Values: "DIN 934"},
                        {TypeID: 103, Name: "Матеріал", Values: "сталь"}
                    ],
                    BasePrice: 5.25,
                    CategoryName: "Болти з шестигранною головкою",
                    SmallFotoFileName: "DIN934_white_zinc.png"
                },
                {
                    id: 4337,
                    Article: "5M6L0MLY000090AD00",
                    Name: "DIN6921 Болт М20х90 10.9 з фланц Delta",
                    BasePrice: 6.25,
                    GPropValues: [
                        {TypeID: 102, Name: "Стандарт (група)", Values: "DIN 934"},
                        {TypeID: 103, Name: "Матеріал", Values: "сталь"}
                    ],
                    BasePrise: 5.25,
                    CategoryName: "Болти з шестигранною головкою",
                    SmallFotoFileName: "DIN6921_delta.png"
                },
                {
                    id: 12960,
                    Article: "N5M60000N5M6X6900C",
                    Name: "A_DIN931 Болт М16х90 А2 ЧР",
                    BasePrice: 8.25,
                    GPropValues: [
                        {TypeID: 104, Name: "Галузь застосування", Values: "для машинобудування"},
                        {TypeID: 103, Name: "Матеріал", Values: "сталь"}
                    ],
                    BasePrise: 5.25,
                    CategoryName: "Болти з шестигранною головкою",
                    SmallFotoFileName: "DIN931_inox.png"
                }
            ])
        }, 1000);
    });
    return promise;
}