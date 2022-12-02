import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import styles from "./Breadcrumb.module.scss";
export default function HeaderBreadcrumb(props) {
  return (
    <Breadcrumb className={styles.breadcrump}>
      {props.breadcrumbItens.map((page) => {
        return (
          <BreadcrumbItem key={page.name} isCurrentPage={page.isCurrentPage}>
            <BreadcrumbLink
              className={page.isCurrentPage ? styles["current-page"] : ""}
              href={page.link}
            >
              {page.name}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </Breadcrumb>
  );
}
