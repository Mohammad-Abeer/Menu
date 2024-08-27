import styles from "./page.module.scss";
import { ChakraProvider } from "@chakra-ui/react";
import RenderMenus from "./RenderMenus";

export default function Home() {
  return (
    <ChakraProvider>
      <main className={styles.main}>
        <RenderMenus />
      </main>
    </ChakraProvider>
  );
}
