import React, { useEffect, useState } from "react";

function Filter({ setfilteredTodoList, todoList, time, setTime }) {
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    setFilter(e.target.value);
    setTime(e.target.value);
  };
  useEffect(() => {
    switch (filter) {
      case "completed":
        setfilteredTodoList(todoList.filter((item) => item.completed));
        if (time === "daily") {
          setfilteredTodoList(todoList.filter((item) => item.time === "daily"));
        } else if (time === "weekly") {
          setfilteredTodoList(
            todoList.filter((item) => item.time === "weekly")
          );
        }
        break;

      case "uncompleted":
        setfilteredTodoList(todoList.filter((item) => !item.completed));
        if (time === "daily") {
          setfilteredTodoList(todoList.filter((item) => item.time === "daily"));
        } else if (time === "weekly") {
          setfilteredTodoList(
            todoList.filter((item) => item.time === "weekly")
          );
        }
        break;
      default:
        setfilteredTodoList(todoList);
        if (time === "daily") {
          setfilteredTodoList(todoList.filter((item) => item.time === "daily"));
        } else if (time === "weekly") {
          setfilteredTodoList(
            todoList.filter((item) => item.time === "weekly")
          );
        }
    }
  }, [filter, todoList, time]);

  return (
    <div className="top">
      <div className="name">
        <svg
          width="97"
          height="34"
          viewBox="0 0 97 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.412 1.72798V10.0473C27.178 9.34255 28.0364 8.73614 28.984 8.2336C31.0421 7.14218 33.3084 6.62398 35.7175 6.62398C38.1267 6.62398 40.393 7.14218 42.4511 8.2336C44.3471 9.23905 45.8858 10.6603 47.0418 12.4528C48.0217 10.7624 49.3245 9.36555 50.9654 8.33999C52.8082 7.18827 54.8636 6.62398 57.0554 6.62398C58.1548 6.62398 59.2235 6.76967 60.2474 7.07258V0.359985H72.4034V11.5297C73.4648 10.1667 74.7815 9.05979 76.3395 8.2336C78.3976 7.14218 80.6638 6.62398 83.073 6.62398C85.4822 6.62398 87.7484 7.14218 89.8065 8.2336C91.8963 9.3418 93.5521 10.9551 94.7396 13.0139C95.9533 15.0935 96.513 17.44 96.513 19.956C96.513 22.4876 95.9341 24.8492 94.6952 26.9484C93.4992 28.9916 91.8263 30.5837 89.7267 31.6825C87.6707 32.7711 85.4072 33.288 83.001 33.288C80.5918 33.288 78.3256 32.7698 76.2675 31.6784L76.2591 31.6739L76.2507 31.6694C74.7362 30.8539 73.4495 29.7735 72.4034 28.4509V33H60.2474V32.8577C59.2271 33.1523 58.1561 33.288 57.0554 33.288C54.8636 33.288 52.8082 32.7237 50.9654 31.572L50.9492 31.5619L50.9331 31.5515C49.3121 30.5094 48.02 29.1121 47.0446 27.4285C45.8742 29.2424 44.3033 30.6715 42.3709 31.6827C40.315 32.7712 38.0516 33.288 35.6455 33.288C33.2364 33.288 30.9701 32.7698 28.912 31.6784L28.9036 31.6739L28.8952 31.6694C26.8398 30.5626 25.2041 28.968 24.0197 26.9421L24.0109 26.9271L24.0023 26.9121C22.8176 24.8307 22.2775 22.4787 22.2775 19.956C22.2775 17.4403 22.8372 15.094 24.0506 13.0146C24.1196 12.8949 24.1902 12.7767 24.2624 12.66H19.716V33H7.56001V12.66H0.864014V1.72798H26.412ZM10.56 9.65999V30H16.716V9.65999H23.412V4.72798H3.86401V9.65999H10.56ZM26.6455 14.52C25.7335 16.08 25.2775 17.892 25.2775 19.956C25.2775 22.044 25.7215 23.868 26.6095 25.428C27.5215 26.988 28.7575 28.188 30.3175 29.028C31.9015 29.868 33.6775 30.288 35.6455 30.288C37.6135 30.288 39.3895 29.868 40.9735 29.028C42.5815 28.188 43.8415 26.988 44.7535 25.428C45.0924 24.8545 45.37 24.2495 45.5862 23.6131C45.9671 22.4918 46.1575 21.2727 46.1575 19.956C46.1575 19.944 46.1575 19.932 46.1575 19.92C46.1541 18.5947 45.9621 17.3737 45.5817 16.2568C45.3739 15.6468 45.1098 15.0678 44.7895 14.52C43.8775 12.936 42.6295 11.724 41.0455 10.884C39.4615 10.044 37.6855 9.62398 35.7175 9.62398C33.7495 9.62398 31.9735 10.044 30.3895 10.884C28.8055 11.724 27.5575 12.936 26.6455 14.52ZM48.6927 16.1918C48.3639 17.3266 48.1994 18.5693 48.1994 19.92C48.1994 19.932 48.1994 19.944 48.1995 19.956C48.2024 21.2984 48.3682 22.539 48.6968 23.6778C48.8699 24.2774 49.0881 24.8488 49.3514 25.392C50.1434 26.952 51.2114 28.164 52.5554 29.028C53.8994 29.868 55.3994 30.288 57.0554 30.288C58.2469 30.288 59.3109 30.0841 60.2474 29.6763C60.4239 29.5994 60.5959 29.5153 60.7634 29.424C61.8434 28.848 62.6714 28.08 63.2474 27.12V30H69.4034V3.35999H63.2474V12.684C62.6234 11.748 61.7594 11.004 60.6554 10.452C60.5213 10.3834 60.3853 10.3191 60.2474 10.2591C59.2755 9.83568 58.2115 9.62398 57.0554 9.62398C55.3994 9.62398 53.8994 10.044 52.5554 10.884C51.2114 11.724 50.1434 12.924 49.3514 14.484C49.086 15.0231 48.8664 15.5924 48.6927 16.1918ZM61.9514 16.32C61.1114 15.432 60.0794 14.988 58.8554 14.988C57.6314 14.988 56.5874 15.432 55.7234 16.32C54.8834 17.184 54.4634 18.384 54.4634 19.92C54.4634 21.456 54.8834 22.68 55.7234 23.592C56.5874 24.48 57.6314 24.924 58.8554 24.924C59.978 24.924 60.9391 24.5505 61.7387 23.8035C61.8109 23.736 61.8818 23.6655 61.9514 23.592C62.4735 23.0554 62.8379 22.4005 63.0445 21.6273C63.1798 21.1209 63.2474 20.5638 63.2474 19.956C63.2474 18.42 62.8154 17.208 61.9514 16.32ZM57.905 21.5316C58.1994 21.8228 58.4662 21.924 58.8554 21.924C59.2561 21.924 59.4995 21.8185 59.772 21.5304L59.7865 21.515L59.8012 21.4999C59.9965 21.2992 60.2474 20.9081 60.2474 19.956C60.2474 19.0038 59.9965 18.6128 59.8012 18.412L59.7865 18.3969L59.772 18.3816C59.4995 18.0935 59.2561 17.988 58.8554 17.988C58.4528 17.988 58.1811 18.0963 57.8744 18.4112M57.905 21.5316C57.6958 21.2915 57.4634 20.8536 57.4634 19.92C57.4634 18.9425 57.7164 18.5741 57.8736 18.412M38.6695 16.248C37.8775 15.384 36.8935 14.952 35.7175 14.952C34.5175 14.952 33.5215 15.384 32.7295 16.248C31.9375 17.088 31.5415 18.324 31.5415 19.956C31.5415 21.564 31.9255 22.8 32.6935 23.664C33.4855 24.528 34.4695 24.96 35.6455 24.96C36.8215 24.96 37.8175 24.528 38.6335 23.664C39.4735 22.8 39.8935 21.564 39.8935 19.956C39.8935 18.348 39.4855 17.112 38.6695 16.248ZM34.9237 21.6569C34.8001 21.5099 34.5415 21.0785 34.5415 19.956C34.5415 18.7719 34.8285 18.3949 34.9123 18.306L34.9268 18.2907L34.941 18.2752C35.1496 18.0476 35.3357 17.952 35.7175 17.952C36.0558 17.952 36.2365 18.0334 36.4581 18.2752L36.4732 18.2916L36.4885 18.3079C36.6157 18.4426 36.8935 18.8384 36.8935 19.956C36.8935 21.0516 36.6159 21.4356 36.4826 21.5728L36.4674 21.5883L36.4525 21.6041C36.1964 21.8752 35.9863 21.96 35.6455 21.96C35.3168 21.96 35.1369 21.8831 34.9237 21.6569ZM74.001 14.52C73.089 16.08 72.633 17.892 72.633 19.956C72.633 22.044 73.077 23.868 73.965 25.428C74.877 26.988 76.113 28.188 77.673 29.028C79.257 29.868 81.033 30.288 83.001 30.288C84.969 30.288 86.745 29.868 88.329 29.028C89.937 28.188 91.197 26.988 92.109 25.428C93.045 23.844 93.513 22.02 93.513 19.956C93.513 17.892 93.057 16.08 92.145 14.52C91.233 12.936 89.985 11.724 88.401 10.884C86.817 10.044 85.041 9.62398 83.073 9.62398C81.105 9.62398 79.329 10.044 77.745 10.884C76.161 11.724 74.913 12.936 74.001 14.52ZM80.085 16.248C79.293 17.088 78.897 18.324 78.897 19.956C78.897 21.564 79.281 22.8 80.049 23.664C80.841 24.528 81.825 24.96 83.001 24.96C84.177 24.96 85.173 24.528 85.989 23.664C86.829 22.8 87.249 21.564 87.249 19.956C87.249 18.348 86.841 17.112 86.025 16.248C85.233 15.384 84.249 14.952 83.073 14.952C81.873 14.952 80.877 15.384 80.085 16.248ZM82.2792 21.657C82.4924 21.8831 82.6723 21.96 83.001 21.96C83.3418 21.96 83.5519 21.8752 83.808 21.6041L83.8229 21.5883L83.838 21.5728C83.9714 21.4356 84.249 21.0516 84.249 19.956C84.249 18.8384 83.9712 18.4426 83.844 18.3079L83.8286 18.2916L83.8136 18.2752C83.5919 18.0334 83.4113 17.952 83.073 17.952C82.6912 17.952 82.505 18.0476 82.2965 18.2752L82.2822 18.2907L82.2678 18.306C82.184 18.3949 81.897 18.7719 81.897 19.956C81.897 21.0786 82.1556 21.51 82.2792 21.657Z"
            fill="black"
          />
        </svg>
      </div>
      <div className="filter">
        <select name="filterTodos" onChange={handleFilter}>
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
        <select name="filterTodos" onChange={handleFilter}>
          <option value="all">all</option>
          <option value="daily">daily</option>
          <option value="weekly">weekly</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
