const movies = [
    {
        id: "1",
        name: "Ponniyin Selvan",
        image: "https://th.bing.com/th/id/OIP.xOUgcOnGyOPtsCpBbh_IDgHaI9?w=136&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        screen: "2D IMAX, 3D IMAX",
        language: "English,Tamil,Hindi,Malayalam,Telungu",
        certificate: "Tamil U/A",
        rating: "8.6",
        theatre: [
            "Ram Cinemas A/C",
            "Balaji A/C",
            "Abirami CINEMAS",
            "Bombay Theatre"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
      
        id: "2",
        name: "Ayothi",
        image: "https://th.bing.com/th/id/OIP.NpbC7acl10S5wlEO_7qnngHaLk?w=115&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        screen: "2D IMAX",
        language: "Tamil,Hindi",
        certificate: "Tamil U/A",
        rating: "8.6",
        theatre: [
            "Ram Cinemas A/C",
            "Balaji A/C",
            "Abirami CINEMAS",
            "Bombay Theatre"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
     
        id: "3",
        name: "Thunivu",
        image: "https://th.bing.com/th/id/OIP.o4Dcc66AW0VkM_c6Hdb4FgHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        screen: "2D IMAX",
        language: "Tamil,Hindi,telungu,malaylam",
        certificate: "U/A",
        rating: "8.6",
        theatre: [
            "Ram Cinemas A/C",
            "Balaji A/C",
            "Abirami CINEMAS",
            "Bombay Theatre"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
       
        id: "4",
        name: "Varisu",
        image: "https://th.bing.com/th/id/OIP.30tErk-dkF2q0-o9YhHFJgHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        screen: "2D IMAX",
        language: "Tamil,Hindi,telungu,malaylam",
        certificate: "U/A",
        rating: "7.6",
        theatre: [
            "Ram Cinemas A/C",
            "Balaji A/C",
            "Abirami CINEMAS",
            "Bombay Theatre"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
      
        id: "5",
        name: "Avatar 2",
        image: "https://th.bing.com/th/id/OIP.ZkyVrDdb2qqPE-tyeuY7PQHaEo?pid=ImgDet&rs=1",
        screen: "2D IMAX,3D IMAX",
        language: "English,Tamil,Hindi,telungu,malaylam",
        certificate: "U/A",
        rating: "8.2",
        theatre: [
            "Ram Cinemas A/C",
            "Balaji A/C",
            "Abirami CINEMAS",
            "Bombay Theatre"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
      
        id: "6",
        name: "Pathu Thala",
        image: "https://th.bing.com/th/id/OIP.nLctv0szkXWuY3YjesBVMgHaLG?w=115&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        screen: "2D IMAX",
        language: "Tamil,Hindi,telungu,malaylam",
        certificate: "U/A",
        rating: "8.1",
        theatre: [
            "Ram Cinemas A/C",
            "Balaji A/C",
            "Abirami CINEMAS",
            "Bombay Theatre"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
      
        id: "7",
        name: "Viduthalai",
        image: "https://th.bing.com/th/id/OIP.1eF72hv6P4mQ89AttKhHjQHaLk?w=115&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        screen: "2D IMAX",
        language: "Tamil,telungu,malaylam",
        certificate: "U/A",
        rating: "8.7",
        theatre: [
            "Ram Cinemas A/C",
            "Balaji A/C",
            "Abirami CINEMAS",
            "Bombay Theatre"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
        
        id: "8",
        name: "Run Baby Run",
        image: "https://th.bing.com/th/id/OIP.0c2ehBxZLsLMv5O29AHLIQHaEc?w=258&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        screen: "2D IMAX",
        language: "Tamil,telungu,malaylam",
        certificate: "U/A",
        rating: "8.3",
        theatre: [
            "Ram Cinemas A/C",
            "Balaji A/C",
            "Abirami CINEMAS",
            "Bombay Theatre"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
   
        id: "9",
        name: "Sembi",
        image: "https://th.bing.com/th/id/OIP.mJY1YBKIl8WwLPjhxzamdgAAAA?w=115&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        screen: "2D IMAX",
        language: "Tamil,telungu,malaylam",
        certificate: "U/A",
        rating: "8.5",
        theatre: [
            "Ram Cinemas A/C",
            "Balaji A/C",
            "Abirami CINEMAS",
            "Bombay Theatre"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    },
    {
       
        id: "10",
        name: "Vaathi",
        image: "https://th.bing.com/th/id/OIP.U5q7HFNPeTkkPbps5JBEHwHaEK?w=290&h=180&c=7&r=0&o=5&dpr=1.1&pid=1.7",
        screen: "2D IMAX",
        language: "Tamil,telungu,malaylam",
        certificate: "U/A",
        rating: "8.6",
        theatre: [
            "Ram Cinemas A/C",
            "Balaji A/C",
            "Abirami CINEMAS",
            "Bombay Theatre"
        ],
        timings: [
            "7:00 AM",
            "10:30 AM",
            "2:15 PM",
            "6:00 PM",
            "9:30 PM"
        ]
    }
]