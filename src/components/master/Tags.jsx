import { useState } from 'react';
import ModalWriteTags from '../../common/Modals/ModalWriteTags';

export default function Tags() {
  const [tags, setTags] = useState(['Стрижки', 'Окрашивание']);
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    if (newTag.trim()) {
      setTags([...tags, newTag.trim()]);
      setNewTag('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Мои теги</h3>
      <div style={{ margin: '10px 0' }}>
        <input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="Новый тег"
        />
        <button onClick={handleAddTag} style={{ marginLeft: '10px' }}>Добавить</button>
      </div>
      <div>
        {tags.map((tag, index) => (
          <span 
            key={index}
            style={{
              display: 'inline-block',
              padding: '5px 10px',
              background: '#eee',
              margin: '5px',
              borderRadius: '4px'
            }}
          >
            {tag}
            <ModalWriteTags/>
          </span>
        ))}
      </div>
    </div>
  );
}