import  { useState } from 'react';





const searchBar = () => {

    const [searchInput, setSearchInput] = useState("");

    const contacts = [[
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
    ];

    const handleChange = (event) => {
        event.preventDefault();
        setSearchInput(event.target.value);
    };

    if (searchInput > 0) {
        contacts.filter((contact) => {
            return contact.name.match(searchInput);
        })
    }

    return (
        <>
            <input
            type="text"
            placeholder="search here"
            onChange={handleChange}
            value={searchInput}
            />
            
            
        </>
    )
}


export default searchBar;