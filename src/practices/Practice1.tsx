export const Practice1 = () => {
  const calcTotalFee = (num: number) => {
    const total = num * 1.1;
    console.log(total);
  };
  const onClickPractoce = () => calcTotalFee(1000);

  return (
    <div>
      <p>引数の型指定</p>
      <button onClick={onClickPractoce}>練習問題１を実行</button>
    </div>
  );
};
