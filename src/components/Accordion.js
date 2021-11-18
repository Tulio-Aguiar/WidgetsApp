import React,{ useState} from 'react';

const Accordion = ({items}) => {
    const [activeIndex, SetActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        SetActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex? 'active' : ''; //expressão pra dizer se a classe está ativa ou não, é preciso declarar o valor active dentor da respectiva div

        return (
            <React.Fragment key={item.title}>
                <div
                 className={`title ${active}`}
                 onClick={() => onTitleClick(index)}
                 >
                     <i className="dropdown icon"></i>
                     {item.title}
                </div>
                <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
            </React.Fragment>
        );
    });

    return ( 
            <div className="ui styled accordion">
            {renderedItems}
            <h1>{activeIndex}</h1>
            </div>
     );
    };
 
export default Accordion;