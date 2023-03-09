import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CategoriesModel } from 'src/app/models/categories.model';
import { Data } from 'src/app/models/data.model';
import { SearchFilterPipe } from 'src/app/pipes/search-filter.pipe';
import { DataServiceService } from 'src/app/services/data-service.service';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  categories: CategoriesModel[] = [];
  searchText: string = '';
  constructor(
    public service: DataServiceService,
    public filter: SearchFilterPipe,
    private router: Router
  ) {}
  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(): void {
    this.service.getAllData().subscribe({
      next: (res: Data) => {
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

  goToProducts(id: number) {
    
    this.router.navigate(['categories', id]);
  }
}
