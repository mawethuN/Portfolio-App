import '../components/Art.css';
import React, { useState } from 'react';
import '../App.css';


function Art() {

    <div>
        <header className="header">
        <h1>Internet Art</h1>
        <p>To the user</p>
      </header>
    </div>

    const [shapes, setShapes] = useState([
        { id: 1, type: 'rectangle', x: 100, y: 100, selected: false },
        { id: 2, type: 'semicircle', x: 200, y: 200, selected: false },
        { id: 3, type: 'circle', x: 300, y: 300, selected: false },
        { id: 4, type: 'triangle', x: 400, y: 400, selected: false },
    ]);

    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const newShapes = shapes.map(shape => {
            if (shape.selected) {
                return {
                    ...shape,
                    x: e.clientX - rect.left - (shape.type === 'rectangle' ? 50 : 25),
                    y: e.clientY - rect.top - (shape.type === 'rectangle' ? 25 : 25),
                    selected: false
                };
            }
            return shape;
        });
        setShapes(newShapes);
    };

    const handleShapeClick = (e, id) => {
        e.stopPropagation();
        const newShapes = shapes.map(shape => ({
            ...shape,
            selected: shape.id === id ? !shape.selected : shape.selected
        }));
        setShapes(newShapes);
    };

    return (

        

        <div className="Art" onClick={handleClick}>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    className={`shape ${shape.type} ${shape.selected ? 'clicked' : ''}`}
                    style={{ left: `${shape.x}px`, top: `${shape.y}px` }}
                    onClick={(e) => handleShapeClick(e, shape.id)}
                ></div>
            ))}
        </div>
    );
}


export default Art;
