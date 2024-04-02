interface CategoryProps {
  params: {
    category: string;
  };
}

export default function Category(props: CategoryProps) {
  return (
    <div>
      <h1>Category</h1>
    </div>
  );
}