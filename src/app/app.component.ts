import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Repo } from './shared/interfaces/repo.interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'recruitment-task-angular';
  userName: string = '';
  searchDisabled: boolean = false;
  repos: Repo[] = [];
  currentUser: string = '';
  error: string = '';
  isLoading: boolean = false;
  isSearchDisabled: boolean = false;
  private sub = new Subscription;

  constructor(private readonly http: HttpClient) { }

   onPassSearch(value: string){
    this.sub=this.http.get<Repo[]>(`${environment.githubApi}/users/${value}/repos`).subscribe((data)=>{
      this.repos=data.sort((a:Repo, b:Repo) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()).reverse();
    },
    (error)=>{
      console.log(error);
    })
  }


  onSearchDisabled(value: boolean): void {
    this.searchDisabled = value
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}



