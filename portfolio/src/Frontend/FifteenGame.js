import React, { useState, useEffect } from 'react';
 import '../css/FifteenGame.css';

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

function isSolvable(tiles) {
    let inversionCount = 0;
    for (let i = 0; i < tiles.length; i++) {
        if (tiles[i] != null) {
            for (let j = i + 1; j < tiles.length; j++) {
                if (tiles[j] != null && tiles[i] > tiles[j]) {
                    inversionCount++;
                }
            }
        }
    }
    return inversionCount % 2 === 0;
}

function isSolved(tiles) {
    for (let i = 0; i < tiles.length - 1; i++) {
        if (tiles[i] !== i) {
            return false;
        }
    }
    return true;
}

function FifteenGame() {
    const [tiles, setTiles] = useState([...Array(15).keys(), null]);
    const [isGameStarted, setIsGameStarted] = useState(false);

    useEffect(() => {
        if (isGameStarted && isSolved(tiles)) {
            alert("Pääsit pelin läpi!");
            setIsGameStarted(false);
        }
    }, [tiles, isGameStarted]);

    const moveTile = (index) => {
        const newTiles = [...tiles];
        const emptyIndex = newTiles.indexOf(null);
        const { row: emptyRow, col: emptyCol } = getRowCol(emptyIndex);
        const { row, col } = getRowCol(index);

        if (Math.abs(row - emptyRow) + Math.abs(col - emptyCol) === 1) {
            newTiles[emptyIndex] = newTiles[index];
            newTiles[index] = null;
            setTiles(newTiles);
        }
    };

    const shuffleTiles = () => {
        let shuffledTiles;
        do {
            shuffledTiles = shuffleArray([...Array(15).keys(), null]);
        } while (!isSolvable(shuffledTiles));
        setTiles(shuffledTiles);
        setIsGameStarted(true);
    };

    const getRowCol = (index) => {
        return { row: Math.floor(index / 4), col: index % 4 };
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (isGameStarted) {
                const emptyIndex = tiles.indexOf(null);
                const { row, col } = getRowCol(emptyIndex);

                switch (event.key) {
                    case 'ArrowUp':
                    case 'w':
                        if (row < 3) moveTile(emptyIndex + 4);
                        break;
                    case 'ArrowDown':
                    case 's':
                        if (row > 0) moveTile(emptyIndex - 4);
                        break;
                    case 'ArrowLeft':
                    case 'a':
                        if (col < 3) moveTile(emptyIndex + 1);
                        break;
                    case 'ArrowRight':
                    case 'd':
                        if (col > 0) moveTile(emptyIndex - 1);
                        break;
                    default:
                        break;
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [tiles, isGameStarted, moveTile]);

    const showfifteenGameModal = (event) => {
        event.stopPropagation(); // This stops the click event from reaching the SVG element.
  
        if(document.querySelector('.FifteenGameModal') === null) {
            console.log("omena");
        return;
        }
  
        const modal = document.querySelector('.FifteenGameModal');
  
        if (modal.style.display === 'block') {
            modal.style.display = 'none';
        } else
        modal.style.display = 'block';
    }
  
            // modal close if pressed outside
            window.onclick = function(event) {
              if(document.querySelector('.FifteenGameModal') === null) {
                  console.log(event.target);
              return;    
              }
  
              console.log(event.target);
  
              const modal = document.querySelector('.FifteenGameModal');
  
              if (event.target !== modal && !event.target.classList.contains('fifteenGameInfo')){
              modal.style.display = 'none';
              }
          }

    return (
        <div className='fifteenGameHeader'>

<h1 className="fifteenGameInfo" onClick={(event) => showfifteenGameModal(event)} >Fifteen game <FontAwesomeIcon icon={faCircleInfo} /></h1>
        <div className="game-container">
            <div className="game-board">
                {tiles.map((tile, index) => {
                    const isRed = [0, 1, 2, 3, 8, 9, 10, 11, ].includes(tile);
                    return (
                        <div
                            key={index}
                            className={`tile ${tile === null ? 'tile-empty' : ''} ${isRed ? 'tile-red' : ''}`}
                            onClick={() => isGameStarted && moveTile(index)}
                        >
                            {tile !== null ? tile + 1 : ''}
                        </div>
                    );
                })}
            </div>
            <p> </p>
            <button className="FifteenBtn" onClick={shuffleTiles}>Shuffle</button>
        </div>
        {/* Modal for info and how to use */}

        <div className="FifteenGameModal">
            <div className="FifteenGame-Modal-content">
                <h2>Fifteen game</h2>
                <p>Click on the tiles next to the empty space to move them. The goal is to get the numbers in order from 1 to 15, starting from the top left corner.</p>
            </div>
        </div>

    </div>
    );
}

export default FifteenGame;