/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function Main({ result, error }) {
  return (
    <>
      <h1 className="text-red-500 text-xl font-bold text-center empty:hidden">
        {error}
      </h1>
      <main className="px-6 flex flex-col items-center">
        <table className="w-full text-left rounded-xl overflow-hidden ">
          <caption className="text-left ml-6 mb-6 text-lg font-medium">
            Department list
          </caption>
          <thead>
            <tr className="bg-[#F0F4FE] ">
              <Th>
                <span className="flex items-center gap-2">
                  <Checkbox disabled={true} />
                  <p>S/N</p>
                </span>
              </Th>
              <Th>Image</Th>
              <Th>SKU</Th>
              <Th>Name</Th>
              <Th>Title</Th>
              <Th>Desciption</Th>
              <Th>Brand</Th>
              <Th>Cost Price</Th>
              <Th>Quantity</Th>
              <Th>Size</Th>
            </tr>
            <tr className="bg-transparent ">
              <Th></Th>
            </tr>
          </thead>
          <tbody className=" overflow-scroll">
            {result.map((data, i) => (
              <Tr
                i={i}
                key={data.SKU}
                sku={data.SKU}
                quantity={data.Quantity}
                name={data.Name ? data.Name : data.supplier}
                description={data.Description}
                cost={data["Cost Price"]}
                size={data.size}
                title={data.Title}
                brand={data.Brand}
                imgUrl={data["Image_1"]}
              />
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

function Th({ children }) {
  return <th className="font-medium py-4 px-3">{children}</th>;
}

function Tr({
  imgUrl,
  name,
  title,
  description,
  cost,
  quantity,
  size,
  brand,
  sku,
  i,
}) {
  return (
    <tr className=" after:absolute after:h-[1px] after:w-[95%]  after:bg-[#F0F0F0] after:bottom-0 after:left-1/2 after:-translate-x-1/2 relative rounded-lg">
      <Td>
        <span className="flex items-center gap-2">
          <Checkbox />
          <p>{i + 1}.</p>
        </span>
      </Td>
      <Td>
        <img src={imgUrl} alt="" className="w-10" />
      </Td>
      <Td>{sku}</Td>
      <Td>{name}</Td>
      <Td>{title}</Td>
      <Td className="max-w-60">{formatLongText(description)}</Td>
      <Td>{brand}</Td>
      <Td>{cost}</Td>
      <Td>{quantity}</Td>
      <Td>{size}</Td>
    </tr>
  );
}

function Td({ children, className }) {
  return <td className={`py-4 px-3 bg-white ${className}`}>{children}</td>;
}

function Checkbox({ disabled = false }) {
  return <input type="checkbox" disabled={disabled} name="" id="" />;
}
export default Main;

function formatLongText(txt) {
  let newTxt = txt;
  if (newTxt.length > 43) newTxt = newTxt.slice(0, 43).padEnd(46, "...");
  return newTxt;
}
