export const Practice2 = () => {
  const getTotalFee = (num: number) => {
    const total = num * 1.1;
    return total;
  };
  const onClickPractoce = () => {
    console.log(getTotalFee(1000));
  };

  return (
    <div>
      <p>返却値の型指定</p>
      <button onClick={onClickPractoce}>練習問題２を実行</button>
    </div>
  );
};
