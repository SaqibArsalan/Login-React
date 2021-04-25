import React, {useEffect, useRef, useState} from 'react';

const Dropdown = ( { label, options, selected, onSelectedChange, className }) => {

    const [open , setOpen ] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }

            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((option) => {

        if (option.id === selected.id) {
            return null;
        }

        return (
            <div
                key={option.id} className="item"
                onClick={() => onSelectedChange(option)}
            >
                {option.value}
            </div>
        );
    });

    return (
        <div ref={ref} className={`ui form mt-4 mb-4 ${className}`}>
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)}
                     className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.value}</div>
                    <div
                        className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Dropdown;