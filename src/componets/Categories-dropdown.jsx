import React, { useState } from 'react';


const categoriesData = [
    { id: 1, name: 'Alternative', subcategories: ['Subcategory 1-1', 'Subcategory 1-2', 'Subcategory 1-3', 'Subcategory 1-4', 'Subcategory 1-5'] },
    { id: 2, name: 'Blues', subcategories: ['Subcategory 2-1', 'Subcategory 2-2', 'Subcategory 2-3', 'Subcategory 2-4', 'Subcategory 2-5'] },
    { id: 3, name: 'Classical', subcategories: ['Subcategory 3-1', 'Subcategory 3-2', 'Subcategory 3-3', 'Subcategory 3-4', 'Subcategory 3-5'] },
    { id: 4, name: 'Country', subcategories: ['Subcategory 4-1', 'Subcategory 4-2', 'Subcategory 4-3', 'Subcategory 4-4', 'Subcategory 4-5'] },
    { id: 5, name: 'Dance', subcategories: ['Subcategory 5-1', 'Subcategory 5-2', 'Subcategory 5-3', 'Subcategory 5-4', 'Subcategory 5-5'] },
    { id: 6, name: 'Electronic', subcategories: ['Subcategory 6-1', 'Subcategory 6-2', 'Subcategory 6-3', 'Subcategory 6-4', 'Subcategory 6-5'] },
    { id: 7, name: 'Fitness & Workout', subcategories: ['Subcategory 7-1', 'Subcategory 7-2', 'Subcategory 7-3', 'Subcategory 7-4', 'Subcategory 7-5'] },
    { id: 8, name: 'Hip-Hop/Rap', subcategories: ['Subcategory 8-1', 'Subcategory 8-2', 'Subcategory 8-3', 'Subcategory 8-4', 'Subcategory 8-5'] },
    { id: 9, name: 'Industrial', subcategories: ['Subcategory 9-1', 'Subcategory 9-2', 'Subcategory 9-3', 'Subcategory 9-4', 'Subcategory 9-5'] },
];

export default function Categories() {
    // usestate til at åbne og lukke vores kategorier
    const [activeCategoryId, setActiveCategoryId] = useState(null);

    //voes button starter med at være null men vis vores button bliver clicked får id property 
    const handleCategoryClick = (id) => {
        setActiveCategoryId(activeCategoryId === id ? null : id);
    };



    return (
        <div style={{ display: 'grid' }}>



            {/* vi henter vores array af info i med .map */}
            {categoriesData.map(category => (

                <div  className='category-div'onClick={() => handleCategoryClick(category.id)}>


                    {/* vi definere hver knap med et category.id så log vis den bliver klikket så køre handleCategoryClick */}
                    <button >
                        {category.name}
                    </button>

                    {/* her spørg vi om div har category.id og vis den er null så bliver den block når button bliver klikked
(vis den div har et matchene id i forhold til vores button) */}

                    <div  style={{ display: activeCategoryId === category.id ? 'block' : 'none', padding: '5%' }}>

{/* vi  henter subcategories via .map function */}
                        {category.subcategories.map((subcategory, index) => (
  
                            <div  key={index}>{subcategory}</div>
                        ))}
                    </div>
                </div>
            ))}

        </div>
    );
};

