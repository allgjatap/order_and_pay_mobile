import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriesModel } from 'src/app/models/categories.model';
import { Data } from 'src/app/models/data.model';
import { DataServiceService } from 'src/app/services/data-service.service';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  categories: CategoriesModel[] = [];

  constructor(public service: DataServiceService) {}
  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.service.getAllData().subscribe({
      next: (res: Data) => {
        console.log('res', res);

        res.categories.forEach((category) => {
          this.categories.push({
            id: category.id,
            categoryName: category.name,
            productNumber: category.products.length,
          });
        });
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
