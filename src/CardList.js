import React from "react";
import Card from "./Card";

const CardList =({ robots }) => {
    const cardarray = robots.map((user,i) =>
    {
        return (
            <Card
                key={i}
                id={robots[i].id}
                name={robots[i].name}
                username={robots[i].username}
                email={robots[i].email}
                url={robots[i].url}
            />
        );
    })

    return(
        <div>
            {cardarray}
        </div>
    );
}

export default CardList;
