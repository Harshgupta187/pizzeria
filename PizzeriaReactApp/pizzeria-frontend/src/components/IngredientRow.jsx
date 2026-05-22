const FALLBACK_IMG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='70'%3E%3Crect width='90' height='70' fill='%23f0f0f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='11' fill='%23999'%3ENo Image%3C/text%3E%3C/svg%3E";

const IngredientRow = ({ ingredient, checked, onChange, disabled }) => {
  return (
    <tr>
      <td style={{ width: "120px" }}>
        <img
          src={ingredient.image || FALLBACK_IMG}
          alt={ingredient.tname}
          style={{ width: "90px", height: "70px", objectFit: "cover" }}
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = FALLBACK_IMG;
          }}
        />
      </td>

      <td>
        <span className="ingredient-name-price">{ingredient.tname}</span>
        <span className="ingredient-price"> ₹{ingredient.price}.00</span>
      </td>

      <td style={{ width: "100px" }}>
        <div className="d-flex align-items-center gap-2">
          <input
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={() => onChange(ingredient)}
            style={{
              width: "16px",
              height: "16px",
              cursor: disabled ? "not-allowed" : "pointer",
              accentColor: "#e67e22",
            }}
          />
          <span
            className="add-link"
            onClick={() => !disabled && onChange(ingredient)}
          >
            Add
          </span>
        </div>
      </td>
    </tr>
  );
};

export default IngredientRow;