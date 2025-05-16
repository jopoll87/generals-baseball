
type Props = {
    title: string;
    children: React.ReactNode;
    id: string;
}

const Section = (props: Props) => {
  return (
    <section {...props}>
        <h2>{props.title}</h2>
        {props.children}
    </section>
  )
}

export default Section